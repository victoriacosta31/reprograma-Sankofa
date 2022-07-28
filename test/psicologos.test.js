const Psicologo = require('../src/models/psicologosModel')

describe("Teste do modelo psicologos", () => {
    const psicologo = new Psicologo({
        id: 3,
        nome: "Victoria",
        telefone: 9199999,
        estado: "Para",
        cidade:"Castanhal",
        Email: "vick7888@gmail.com"
    });
    it("Deve chamar o Schema e retornar um novo psicologo", () => {
        expect(psicologo.nome).toBe("Victoria")
    });
    it("Deve salvar no banco de dados o novo psicologo", () =>{
        psicologo.save().then((dados) => {
            expect(dados.nome).toBe("Victoria")
        })
    })
})
