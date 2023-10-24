import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,//starting me false pass kar diye hai lekin user pass kar sakta hai
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId() //this hook which to generate a unqiuekey..NOTE- do not use this to generate key in a list

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount} //agar user value pass nahi karega tho site crash kar sakta hai islye  jab tak onAmountChange ka condition true nahi hoga tab tak onChange nahi hoga.
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}//javascript string format me value lete hai isly Number use kiye hai 
                            //event fire kar rhe hai aur ek method call kar rhe hai
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}
export default InputBox;