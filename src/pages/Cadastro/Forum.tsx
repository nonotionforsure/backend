import { ForumStyle } from "../../styles/pages/ForumStyle"
import { Header } from "../../components";
import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUser } from "api/data";
import { useForm } from "react-hook-form"

const Cadastro = () => {
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const { handleSubmit, register } = useForm();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const handleLogin = useCallback(
        async (data) => {
            console.log(data);
            try {
                await apiUser.register(data);
                toast.success("Usuário Cadastrado com sucesso!");
                history.push("/login");
            } catch (error) {
                toast.error(`Falha no Login! ${error.response.data}`);
            }
        },
        [history]
    );
    return (
        <>
            <Header />
            <ForumStyle>
                <p id="mensagem">Junta-se ao fórum e <br /> compartilhe suas ideias com <br /> outros fãs</p>
                <section>
                    <form className="formulario" method="POST" action=''>
                        <fieldset>
                            <legend>cadastro</legend><br />
                            <div className="dentroform">
                                <label htmlFor="nome">user:</label>
                                <input type="text" name="nome" required placeholder="@cherrysot" id="nome" /><br /><br />
                                <label htmlFor="email">email:</label>
                                <input type="email" id="email" name="email" required placeholder="rockerpoem@gmail.com" /><br /><br />
                                <label htmlFor="senha">senha:</label>
                                <input type="password" id="senha" name="senha" /><br /><br />
                            </div>
                            <input className="enviar" type="submit" value="enviar" />
                        </fieldset>
                    </form>
                </section>
                <div className="grid-container">
                    <picture id="flor1">
                        <img src="/flower1.png" />
                    </picture>
                    <p id="mensagem2">treat people with kindness</p>
                    <picture id="flor2">
                        <img src="/flower2.png" />
                    </picture>
                </div>
            </ForumStyle>
        </>
    )
}
export default Cadastro