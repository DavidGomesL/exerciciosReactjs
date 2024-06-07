export default function ExemploUm() {

    let cliente = {
        nome: "David Luan Gomes Lima",
        email: "david@gmail.com"
    };

    let a = 100;
    let b = 19;

    function soma(a,b) {
        return a + b
    };
        
    return(
        <>
            <p>Nome do cliente: {cliente.nome}</p>
            <p>E-mail do cliente: {cliente.email}</p>
            <p>A soma de {a} + {b} = {soma(a,b)}</p>
        </>
    )
}