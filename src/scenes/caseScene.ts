import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    elementoHTML?: HTMLElement
    private objetoInteracao: any

    private textoDaCena: string = ""

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 100
        })
    }

    fadeOutElement(elemento: HTMLElement) {
        // Pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)

        // Repetir diminuição da opacidade
        setInterval(() => {
            // Se elemento ainda está visivel
            if (opacidade > 0) {
                // Diminuir a opacidade
                opacidade = opacidade - 0.1

                // Atualizar a opacidade do elemento
                elemento.style.opacity = opacidade.toString()
            }
        }, 20)
    }

    onInitialize(engine: Engine<any>): void {

      
        this.elementoHTML = document.createElement("div") as HTMLElement
        this.elementoHTML.style.opacity = "1"

        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementoHTML)

        this.elementoHTML.classList.add("gamificacao")

        // Configurar a cena para detectar a tecla Enter e ir para a próxima cena
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.R) {
                this.fadeOutElement(this.elementoHTML!)
                this.engine.goToScene("exposicao")
            }
        })
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        this.backgroundColor = Color.Gray
        
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {

            this.elementoHTML!.innerHTML = `<h2>CASE DA ESCOLA</h2>
            <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
            usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
            experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
            equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
            desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`

            this.elementoHTML!.style.opacity = "1"

            let spriteLogoGamificaAi = Resources.LogoVertical.toSprite()
            spriteLogoGamificaAi.scale = vec(0.7, 0.7)

            // Criação do Actor para a imagem
            let actorLogoGamificaAi = new Actor({
                pos: vec(300, this.engine.halfDrawHeight)
            })

            actorLogoGamificaAi.graphics.add(spriteLogoGamificaAi)

            this.add(actorLogoGamificaAi)

            

        }

        // this.onDeactivate(context: SceneActivationContext<undefined>): void {
        //     this.elementoHTML?.remove()
        // }



        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            
            this.elementoHTML!.innerHTML = `<h2>CASE DA MESA B </h2>
            <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
            usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
            experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
            equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
            desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`

            this.elementoHTML!.style.opacity = "1"

            let spriteLogoGamificaAi = Resources.LogoVertical.toSprite()
            spriteLogoGamificaAi.scale = vec(0.7, 0.7)

            // Criação do Actor para a imagem
            let actorLogoGamificaAi = new Actor({
                pos: vec(300, this.engine.halfDrawHeight)
            })

            actorLogoGamificaAi.graphics.add(spriteLogoGamificaAi)

            this.add(actorLogoGamificaAi)

           
        }

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            
            this.elementoHTML!.innerHTML = `<h2>CASE DA MESA C</h2>
            <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
            usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
            experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
            equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
            desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`

            this.elementoHTML!.style.opacity = "1"

            let spriteLogoGamificaAi = Resources.LogoVertical.toSprite()
            spriteLogoGamificaAi.scale = vec(0.7, 0.7)

            // Criação do Actor para a imagem
            let actorLogoGamificaAi = new Actor({
                pos: vec(300, this.engine.halfDrawHeight)
            })

            actorLogoGamificaAi.graphics.add(spriteLogoGamificaAi)

            this.add(actorLogoGamificaAi)

            
        }
    }
    onDeactivate(context: SceneActivationContext<undefined>): void {
        // this.elementoHTML?.remove()
    }
}