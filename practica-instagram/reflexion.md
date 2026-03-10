### ¿Cuáles son las principales diferencias entre maquetar con HTML/CSS en web vs Flexbox en React Native? Menciona la menos 3 diferencias concretas que experimentaste durante la práctica.

En web se utilizan distintos componentes com lo es un div por ejemplo, mientras que en react native se utilizan unos componentes base como view, que se mapean a sus respectivos elementos en cada plataforma, de una manera en la que el mismo componente se renderiza de una manera similar en cada plataforma obteniendo un resultado similar. Sin embargo hay casos donde se llegan a usar componentes específicos por plataforma.

En tema HTML/CSS llega a ser similar, en lugar de HTML, se usan componentes de React Native como view o text, y en cuanto a css llega a ser similar, sin embargo se trabaja usando objetos en su mayoría diseñados de tal manera que hacen el desarrollo más secillo.

Propiedades de CSS son similares, si acaso algunos defaults cambian.
En lugar de usar clases usamos el atributo style dentro de los componentes de react native, para mapear lo que es el estilo y el componente de ui.

Como se mencionaba en los slides de la clase, en react native no específicamos unidades en los estilos.
