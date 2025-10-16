import * as React from "react";

const MOBILE_BREAKPOINT = 768; // Define o ponto de quebra para telas móveis (tablets e abaixo)

// CORREÇÃO: A função foi renomeada de "useIsMobile" para "useMobile".
export function useMobile() {
  // Estado para armazenar se a tela é considerada móvel ou não.
  // Inicia como `undefined` para evitar problemas de hidratação no servidor.
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Cria um media query listener para detectar mudanças no tamanho da tela.
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Função que será chamada quando o tamanho da tela mudar.
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Adiciona o listener para o evento de mudança.
    mql.addEventListener("change", onChange);

    // Define o estado inicial assim que o componente é montado no cliente.
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Função de limpeza: remove o listener quando o componente é desmontado.
    return () => mql.removeEventListener("change", onChange);
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez.

  // Retorna `true` ou `false`. O `!!` converte o valor (incluindo `undefined`) para um booleano.
  return !!isMobile;
}