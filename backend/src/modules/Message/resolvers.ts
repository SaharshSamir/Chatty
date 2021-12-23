
export const MessageResolver =  {
    Query: {
        getMessage: (_parent, _args, _context) => {
            console.log('gettting the message');
            return 'Yo get yo message, bitch';
        }
    }
}