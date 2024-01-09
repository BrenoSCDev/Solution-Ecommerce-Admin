import Layout from "@/layout";
import Link from "next/link"
export default function Products(){
    return(
        <Layout>
            <Link className="btn-primary" href={'/products/new'}>
                Adicionar novo produto
            </Link>
        </Layout>
    )
}