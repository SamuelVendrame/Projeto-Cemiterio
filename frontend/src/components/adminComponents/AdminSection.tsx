import Input from "../inputbar/Input";
import AdminRecordList from "./AdminRecordList";
import type { dadosCadastro } from "../../../types/dadosCadastro";
import { useState, useEffect } from "react";
import Botao from "../botao/Botao";
import ModalCreate from "../modals/ModalCreate";

const AdminSection = () => {
    const [resultado, setResultado] = useState<dadosCadastro[]>([])
    const [dadoSelect, setDadoSelect] = useState<dadosCadastro | null>(null)
    const [search, setSearch] = useState("")
    const [modalMode, setModalMode] = useState<"create" | "edit" | null>(null)
    
       useEffect(() =>{
            const carregar = async () => {
                try {
                    const resposta = await fetch("/api/mostrarDados"); 
                    const dados = await resposta.json()
                    setResultado(dados)

                } catch (error) {
                    console.log("Erro na busca:", error);
                }
            };
            carregar()
        }, [])

        function selecionarRegistro(dado: dadosCadastro) {
            setDadoSelect(dado)
            setModalMode("edit")
        }

        async function criarRegistro(data: dadosCadastro) {
            try {
            const resposta = await fetch("/api/registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    },
                body: JSON.stringify(data)
                })

                const resultado = await resposta.json()
                console.log(resultado)
                setModalMode(null)

            } catch (erro) {
                console.error("Erro ao cadastrar:", erro)
            }
        }

       async function editarRegistro(data: dadosCadastro) {
            try {

                if (!data.id) {
                    console.error("ID do registro é obrigatório para edição");
                    return;
                }

                const resposta = await fetch(`/api/editar/${data.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nome: data.nome,
                        dataNascimento: data.dataNascimento,
                        dataFalecimento: data.dataFalecimento,
                        outraPessoaNome: data.outraPessoaNome,
                        id: data.id
                    })
                });
                console.log(resposta)

                const resultado = await resposta.json();
                console.log("Registro editado com sucesso:", resultado);
                setModalMode(null)

            } catch (erro) {
                console.error("erro ao editar registro:", erro);
            }
        }

        
    return(
        <section className="max-h-fit w-[90vw] bg-gray-200 mx-auto my-10 flex flex-col items-center border rounded-xl ">
            <div className=" flex flex-col justify-center items-center">
                <h2 className="text-2xl m-3">Modificação de Cadastros</h2>
                <Botao onClick={() => {setDadoSelect(null); setModalMode("create")}}>Adicionar Registro</Botao>
            </div>

                <Input search={search} setSearch={setSearch} />
                <ul className="w-[70vw] flex flex-col items-end bg-[green] mt-5 ">
                    <AdminRecordList dados={resultado} onClick={(dado) => {selecionarRegistro(dado)}}/>
                </ul>

                             
                <ModalCreate isOpen={modalMode !== null} mode={modalMode} close={() => setModalMode(null)} dadoSelect={dadoSelect}  onSubmit={modalMode === "create" ? criarRegistro : editarRegistro}>
                    
                </ModalCreate>  
                   
        </section>
    )
}

export default AdminSection;

