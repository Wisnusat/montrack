import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Sidebar from '@/components/ui/sidebar'
import { Plus, Search } from 'lucide-react'

const transactionList = [
  {
    tanggal: "05 November 2024",
    pengeluaran: 47000,
    pemasukan: 20000,
    listItem: [
      {
        name: "Ayam Geprek Bajak",
        category: "Makanan",
        type: "Pengeluaran",
        amount: 40000
      },
      {
        name: "Es Teh Jumbo",
        category: "Makanan",
        type: "Pengeluaran",
        amount: 7000
      },
      {
        name: "Nemu Duit",
        category: "Bonus",
        type: "Pemasukan",
        amount: 20000
      },
    ],
  },
  {
    tanggal: "09 November 2024",
    pengeluaran: 47000,
    pemasukan: 20000,
    listItem: [
      {
        name: "Ayam Geprek Bajak",
        category: "Makanan",
        type: "Pengeluaran",
        amount: 40000
      },
      {
        name: "Es Teh Jumbo",
        category: "Makanan",
        type: "Pengeluaran",
        amount: 7000
      },
      {
        name: "Nemu Duit",
        category: "Bonus",
        type: "Pemasukan",
        amount: 20000
      },
    ],
  }
]

const TransactionPage = () => {

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex w-screen overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 max-h-screen overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Transaksi</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Cari apapun di sini ..."
                className="w-80 pl-10 pr-4 py-2 rounded-lg bg-zinc-800 border-0 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-black"><Plus /></Button>
          </div>
        </div>

        {/* Balance Card */}
        <Card className="mb-8 bg-zinc-900 border-0 rounded-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-zinc-800 shadow-md rounded-lg p-3">
                <div className="text-sm text-gray-400">Pemasukan</div>
                <div className="text-2xl font-bold mt-1 text-green-500">+Rp9.543.210,00</div>
              </div>
              <div className="bg-zinc-800 shadow-md rounded-lg p-3">
                <div className="text-sm text-gray-400">Pengeluaran</div>
                <div className="text-2xl font-bold mt-1 text-red-500">-Rp543.210,00</div>
              </div>
              <div className="bg-zinc-800 shadow-md rounded-lg p-3">
                <div className="text-sm text-gray-400">Sisa Saldo</div>
                <div className="text-2xl font-bold mt-1">Rp9.000.000,00</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction List */}
        {transactionList.map((item, index) => (
          <div key={index} className="bg-zinc-900 shadow-md rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium">{item.tanggal}</h2>
              <div className="flex gap-x-10 items-center">
                <div>
                  <h2 className="text-sm font-medium">Pemasukan</h2>
                  <h2 className="text-base font-normal text-green-500">Rp{item.pemasukan}</h2>
                </div>
                <div>
                  <h2 className="text-sm font-medium">Pengeluaran</h2>
                  <h2 className="text-base font-normal text-red-500">Rp{item.pengeluaran}</h2>
                </div>
              </div>
            </div>
            {item.listItem.map((item, index) => (
              <div key={index} className="bg-zinc-800 shadow-md rounded-lg py-2 px-4 mt-4 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-full bg-blue-400"></div>
                  <div className="flex flex-col">
                    <div className="text-base text-gray-400">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.category}</div>
                  </div>
                </div>
                <h2 className={`text-base font-normal ${item.type === "Pemasukan" ? "text-green-500" : "text-red-500"}`}>Rp{item.amount}</h2>
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
};


export default TransactionPage;
