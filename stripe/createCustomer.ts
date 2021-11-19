const createCustomer = async (email: string, name: string) => {
    
    return fetch('/api/create-customer', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, name})
    })
    .then(res => res.json())
}

export default createCustomer