import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0) //1
  const [from, setFrom] = useState("usd") //2
  const [to, setTo] = useState("inr") //3
  const [convertedAmount, setConvertedAmount] = useState(0) //4

  const currencyInfo = useCurrencyInfo(from) //currencyInfo me currency pass hoga "from" se aur pehle se from usetate wala me "usd" pass hai tho site crash nahi karega

  const options = Object.keys(currencyInfo) //currency ka key access karenge

  const swap = () => {
    setFrom(to)  //setfrom me swap karne ke baad "to" usestate se aayga value
    setTo(from)   //isme "from" se ayga
    setConvertedAmount(amount) //1 -->4  (intial value swap karega )
    setAmount(convertedAmount) //4 -->1
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://th.bing.com/th/id/R.e95f37e1f137811771a06f5e55d833c3?rik=XuI97FNMlG24Yg&riu=http%3a%2f%2ffiles.differencebetween.com%2fwp-content%2fuploads%2f2017%2f06%2fDifference-Between-Transaction-and-Exchange-2.jpg&ehk=Bryd5mcPvv7UePpii3WBKrfJIIgyWJh%2f1%2fSy7qAja9c%3d&risl=&pid=ImgRaw&r=0')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App