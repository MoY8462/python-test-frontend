const input = ` focus:border-blue-500 focus:outline-none 
                text-primary border border-gray-400 formkit-invalid:border-red-700`
const outer = 'mb-3 h-[84px]'

export default {
    global: {
        message: 'text-red-500',
        input: 'w-full px-3 py-2.5 rounded placeholder-gray-400 ',
    },
    email: { input, outer },
    password: { input, outer },
    text: { input, outer },
    number: { input, outer },
    select: { input, outer },
    radio: {
        options: 'mt-1.5 grid grid-cols-[repeat(2,min-content)] place-items-start gap-x-3',
        wrapper: 'grid grid-cols-[1fr_min-content] gap-1.5',
        label: 'order-first',
        outer:  'h-[79px]',
    },
    submit: { 
        input: ' text-white font-bold bg-yellow-500 hover:bg-yellow-700'
    }
}
