import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // /posts 配下のファイルを取得
    const fileNames = fs.readdirSync(postsDirectory); // postsディレクトリ配下のファイル名の配列

    /**
     * こんな感じのデータの配列で返される
     * {
     *   id: 'pre-rendering',
     *   title: 'Two Forms of Pre-rendering',
     *   date: '2020-01-01',
     *   tags: ['nextjs', 'vercel']
     * }
     */
    const allPostsData = fileNames.map((fileName) => {
        // ".md"をファイル名から外す
        const id = fileName.replace(/\.md$/, '');

        // マークダウンを文字列として読み込む
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        // gray-matter を使用して投稿メタデータを解析する
        const matterResult = matter(fileContents);

        return {
            id,
            ...(matterResult.data as { date: string, title: string, tags: Array<string>}),
        };
    });

    // date でソートする
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });

}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    // こんな感じの配列を返す。
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            }
        }
    })
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gra-matter を使用して投稿メタデータを解析
    const matterResult = matter(fileContents);

    // remarkを使用してmarkdownをhtmlに変換する
    const processedContent = await remark()
        .use(html, { sanitize: false })
        .use(prism)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string, title: string })
    }
}