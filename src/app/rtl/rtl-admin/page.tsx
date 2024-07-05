import Nav from "@/app/components/Nav"

export default function RtlAdmin() {
    return (
        <>
            <div className="flex flex-row-reverse w-full h-full bg-[#f4f7fe] font-sans">
                <Nav />
                <div className="w-full p-4">
                    <h1 className="text-4xl">RTL Admin</h1>
                    {/* Divided into two Left and Right */}
                </div>
            </div>
        </>
    )
};