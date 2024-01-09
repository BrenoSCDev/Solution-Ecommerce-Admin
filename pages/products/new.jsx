import Layout from "@/layout";

export default function NewProducts(){
    return(
        <Layout>
            <h1>Novo Produto</h1>
            <label>Nome do Produto</label>
            <input
            type="text"
            placeholder="Adicionar novo produto"
            />
            <label>Descrição</label>
            <textarea
            type="text"
            placeholder="Descrição"
            />
            <label>Preço</label>
            <input
            type="text"
            placeholder="Preço"
            />
            <button className="btn-primary">Salvar</button>
        </Layout>
    )
}