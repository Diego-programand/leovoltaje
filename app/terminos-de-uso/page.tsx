import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";

export const metadata = {
    title: "Términos de Uso | Grupo Leovoltaje",
    description: "Términos y condiciones de uso del sitio web y servicios de Grupo Leovoltaje.",
};

export default function TermsOfUsePage() {
    const lastUpdated = "19 de Febrero de 2026";

    return (
        <>
            <Header />
            <main className="bg-white min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link
                        href="/"
                        className="inline-flex items-center text-primary-1 hover:text-primary-2 transition-colors mb-8 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver al Inicio
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Términos de Uso
                    </h1>
                    <p className="text-slate-500 mb-12">
                        Última actualización: {lastUpdated}
                    </p>

                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-primary-1 hover:prose-a:text-primary-2">

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">1. Aceptación de los Términos</h2>
                            <p>
                                Bienvenido a <strong>Grupo Leovoltaje</strong>. Al acceder y utilizar nuestro sitio web
                                (https://grupoleovoltaje.com) y solicitar nuestros servicios de ingeniería eléctrica,
                                usted acepta cumplir y estar legalmente obligado por los presentes Términos de Uso,
                                así como por nuestra <Link href="/politica-de-privacidad" className="font-medium">Política de Privacidad</Link>.
                            </p>
                            <p>
                                Si no está de acuerdo con alguno de estos términos, le rogamos abstenerse de utilizar nuestro sitio web
                                o contratar nuestros servicios.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">2. Descripción de los Servicios</h2>
                            <p>
                                Grupo Leovoltaje ofrece servicios profesionales de ingeniería eléctrica, incluyendo pero no limitado a:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li>Diseño, construcción y mantenimiento de instalaciones eléctricas residenciales, comerciales e industriales.</li>
                                <li>Trámites de legalización y certificación RETIE (Reglamento Técnico de Instalaciones Eléctricas).</li>
                                <li>Diseño de planos eléctricos y memorias de cálculo.</li>
                                <li>Instalación de sistemas de energía solar fotovoltaica.</li>
                                <li>Implementación de sistemas de domótica y seguridad electrónica (CCTV).</li>
                            </ul>
                            <p className="mt-4">
                                La contratación efectiva de cualquiera de estos servicios estará sujeta a una cotización formal y, en su caso, a un contrato de prestación de servicios específico.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">3. Responsabilidades del Usuario</h2>
                            <p>
                                Al utilizar nuestro sitio web o solicitar nuestros servicios, usted se compromete a:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li>Proporcionar información veraz, exacta y completa en los formularios de contacto y durante el proceso de cotización.</li>
                                <li>Utilizar el sitio web de manera lícita y no realizar acciones que puedan dañar, inutilizar o sobrecargar nuestra infraestructura tecnológica.</li>
                                <li>No utilizar nuestros servicios para fines ilegales o no autorizados.</li>
                                <li>Garantizar el acceso seguro y adecuado a las instalaciones donde se realizarán los trabajos eléctricos contratados.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">4. Propiedad Intelectual</h2>
                            <p>
                                Todos los contenidos presentes en este sitio web, incluyendo textos, gráficos, logotipos, imágenes, videos, iconos, software y diseño, son propiedad exclusiva de <strong>Grupo Leovoltaje</strong> o de sus respectivos licenciantes, y están protegidos por las leyes de propiedad intelectual e industrial vigentes en Colombia y tratados internacionales.
                            </p>
                            <p>
                                Está prohibida la reproducción, distribución, modificación o comunicación pública de cualquier contenido sin la autorización previa y por escrito de Grupo Leovoltaje.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">5. Limitación de Responsabilidad</h2>
                            <p>
                                Grupo Leovoltaje se esfuerza por garantizar la exactitud de la información técnica proporcionada en este sitio. Sin embargo, no garantizamos que el contenido esté libre de errores u omisiones.
                            </p>
                            <p>
                                En la prestación de servicios físicos, nuestra responsabilidad se limita a lo establecido en el contrato de servicio específico y a las garantías legales aplicables a las instalaciones eléctricas bajo la normativa colombiana (RETIE/NTC 2050). No nos hacemos responsables por daños indirectos, incidentales o consecuentes derivados del uso inadecuado de las instalaciones por parte del usuario o de terceros no autorizados.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">6. Enlaces a Terceros</h2>
                            <p>
                                Nuestro sitio web puede contener enlaces a sitios web de terceros (proveedores, fabricantes, entidades regulatorias). Estos enlaces se proporcionan únicamente para su conveniencia y no implican respaldo o afiliación. Grupo Leovoltaje no se hace responsable por el contenido o las prácticas de privacidad de dichos sitios externos.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">7. Ley Aplicable y Jurisdicción</h2>
                            <p>
                                Estos Términos de Uso se rigen e interpretan de acuerdo con las leyes de la República de Colombia. Cualquier disputa relacionada con estos términos o con los servicios de Grupo Leovoltaje será sometida a la jurisdicción exclusiva de los jueces y tribunales competentes de la ciudad de Medellín, Antioquia.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">8. Modificaciones</h2>
                            <p>
                                Grupo Leovoltaje se reserva el derecho de actualizar o modificar estos Términos de Uso en cualquier momento sin previo aviso. El uso continuado del sitio web después de cualquier cambio constituye su aceptación de los nuevos términos.
                            </p>
                        </section>

                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <p className="text-sm text-slate-500">
                                Para cualquier consulta sobre estos Términos de Uso, puede contactarnos en <a href="mailto:grupo.leovoltaje@gmail.com" className="text-primary-1 font-medium">grupo.leovoltaje@gmail.com</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
