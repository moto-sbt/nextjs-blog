import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import { serialize } from 'next-mdx-remote/serialize';

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
        // ".mdx"をファイル名から外す
        const id = fileName.replace(/\.mdx$/, '');

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

export function getSortedPostsDataByTag(tag: string) {
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
        // ".mdx"をファイル名から外す
        const id = fileName.replace(/\.mdx$/, '');

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

    // tag　でフィルターをかける
    const postsData = allPostsData.filter((postData) => {
        return postData.tags.indexOf(tag) != -1
    })

    // date でソートする
    return postsData.sort(({ date: a }, { date: b }) => {
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
                id: fileName.replace(/\.mdx$/, ''),
            }
        }
    })
}

// mdx ファイルを解析して記事データを返す
export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const mdxSource = fs.readFileSync(fullPath, 'utf-8');

    // gra-matter を使用して投稿メタデータを解析
    const { content, data } = matter(mdxSource);

    // MDXの内容をシリアライズして取得
    const contentHtml = await serialize(content);

    return {
        id,
        contentHtml,
        ...(data as { date: string, title: string })
    }
}

// 全記事のtagを返す
export function getAllTags(): string[] {
    const allPostsData = getSortedPostsData();

    // タグのみ取り出す
    const tagsArray = allPostsData.map(post => post.tags);

    // 重複するタグを削除
    const uniqueTags = [...new Set(tagsArray.flat())];
    
    return uniqueTags;
}