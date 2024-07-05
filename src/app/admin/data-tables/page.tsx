import Nav from "@/app/components/Nav"
import MyTable from "@/app/components/DataTables/Table"

export default function DataTables() {
    return (
        <>
            <div className="flex w-full h-full bg-[#f4f7fe] font-sans">
                <Nav />
                <div className="w-full p-4">

                    <MyTable />
                </div>
            </div>
        </>
    )
};