import SNSIconLinks from '@/components/molecules/SNSIconLinks'
import CopyRight from '@/components/atoms/CopyRight'

const HomeFooter = () => {
    return (
        <footer className="max-w-5xl mx-auto px-6 pb-10">
            <div className="pt-8" style={{ borderTop: '1px solid #e2e8f0' }}>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2">
                        <SNSIconLinks />
                    </div>
                    <CopyRight />
                </div>
            </div>
        </footer>
    )
}

export default HomeFooter
