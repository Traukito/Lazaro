import React from 'react'

const AboutPage = () => {
  return (
    <div className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold underline text-blue-600 mb-4 text-center">
        Acerca de Copilot System
      </h1>
      <p className="text-lg leading-relaxed mb-4 text-center text-justify">
        Copilot System es una interfaz de programación de aplicaciones (API) diseñada para integrarse con el sistema de gestión de mantenimiento computarizado (CMMS) Fracttal One. Su principal objetivo es mejorar la gestión de activos mediante la creación de identificadores únicos (TAGs) que se alinean con las mejores prácticas de gestión de activos.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-center text-justify">
      Copilot System permite la generación automática de TAGs que facilitan la individualización y el seguimiento de cada activo dentro del sistema. Estos identificadores únicos ayudan a mantener un registro preciso y organizado de los activos, lo que es esencial para una gestión eficiente. La API ofrece la capacidad de agrupar activos en diversas categorías como familias, edificios, pisos y tipos acreditables, entre otros. Esto permite una mejor organización y facilita el acceso a información detallada sobre cada grupo de activos.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-center text-justify">
        Los TAGs creados por Copilot System están estructurados de manera que persisten en el tiempo, asegurando una gestión continua y precisa de los activos. La integración de Copilot System con Fracttal One promete una serie de beneficios para la gestión de activos, incluyendo eficiencia operativa, reducción de errores, facilitación de la toma de decisiones y cumplimiento normativo. Mejora la eficiencia operativa al proporcionar un sistema más organizado y fácil de gestionar, minimiza los errores en la identificación y registro de activos mediante la automatización de la generación de TAGs, proporciona datos precisos y organizados que pueden ser utilizados para tomar decisiones informadas sobre el mantenimiento y gestión de activos, y ayuda a asegurar el cumplimiento de normativas y estándares gubernamentales mediante una gestión transparente y verificable de los activos.
      </p>
    </div>
  )
}

export default AboutPage;
