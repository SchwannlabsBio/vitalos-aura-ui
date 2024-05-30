// pages/index.js
import dynamic from 'next/dynamic';

const SchwannPlot = dynamic(() => import('@/components/ui/schwann-plot'), {
    ssr: false,
});

const Page = () => {
    return (
        <div className="grid grid-cols-2">
        </div>
    );
};

export default Page;
