export const Input = ({lable,placeholder,type,bg}) =>{
    return(
        <div className="text-sm w-full">
            <lable className='text-border font-semibold'>{lable}</lable>
            <input 
            required 
            placeholder={placeholder} 
            type={type} 
            className={`w-full text-sm mt-2 p-4 border border-border rounded text-white ${
                bg ? 'bg-main' : 'bg-dry'
            }`}></input>
        </div>
    )
}