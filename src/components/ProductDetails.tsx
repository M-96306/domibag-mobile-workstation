
export const ProductDetails = () => {
  const detailImages = [
    {
      src: "/lovable-uploads/1521e69a-59fb-43e9-8552-5f68d34aa4a2.png",
      title: "Sistema Modular Desagregável",
      description: "Componente do sistema modular que permite desagregar o módulo para transporte seletivo e personalização"
    },
    {
      src: "/lovable-uploads/5d5b454d-3a56-4d43-ad1f-0ae14056e16e.png",
      title: "Tabuleiro de Alumínio Amovível",
      description: "Superfície de trabalho em alumínio anodizado, esterilizável e compatível com autoclave"
    },
    {
      src: "/lovable-uploads/7eaf8494-825d-49fb-b1fe-b5cdf0692651.png",
      title: "Rodas Triangulares Inovadoras",
      description: "Sistema patenteado de rodas triangulares que facilita a subida de escadas e supera obstáculos"
    }
  ];

  const systemImages = [
    {
      src: "/lovable-uploads/02a37a11-a23e-4e6e-a217-3447d7c2affb.png",
      alt: "Domibag com sistema modular - Vista frontal"
    },
    {
      src: "/lovable-uploads/f2f642b6-e3bc-40a0-943f-87785e6b7662.png",
      alt: "Domibag com sistema modular - Vista lateral"
    },
    {
      src: "/lovable-uploads/f91a50cc-f2c3-45ae-ae86-cabd7f2421f5.png",
      alt: "Domibag com sistema modular - Vista completa"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Detalhes
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Técnicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada componente da Domibag foi pensado para maximizar a eficiência e o conforto dos profissionais de saúde
          </p>
        </div>

        {/* Detail Images with Descriptions */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {detailImages.map((detail, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img 
                  src={detail.src} 
                  alt={detail.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{detail.title}</h3>
                <p className="text-gray-600 leading-relaxed">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* System Images Gallery */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Sistema Modular em
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> Detalhe</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {systemImages.map((image, index) => (
              <div key={index} className="relative group">
                <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-auto transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
