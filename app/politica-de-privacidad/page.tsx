import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";

export const metadata = {
    title: "Política de Privacidad | Grupo Leovoltaje",
    description: "Política de tratamiento de datos personales y privacidad de Grupo Leovoltaje, conforme a la Ley 1581 de 2012 (Habeas Data) en Colombia.",
};

export default function PrivacyPolicyPage() {
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
                        Política de Privacidad
                    </h1>
                    <p className="text-slate-500 mb-12">
                        Última actualización: {lastUpdated}
                    </p>

                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-primary-1 hover:prose-a:text-primary-2">

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">1. Introducción</h2>
                            <p>
                                En <strong>Grupo Leovoltaje</strong> (en adelante, "la Empresa"), nos comprometemos
                                a proteger la privacidad y los datos personales de nuestros usuarios, clientes y visitantes,
                                en cumplimiento con la Constitución Política de Colombia y la <strong>Ley 1581 de 2012</strong>,
                                así como sus decretos reglamentarios.
                            </p>
                            <p>
                                Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y procesamos
                                su información personal cuando visita nuestro sitio web o utiliza nuestros servicios de ingeniería eléctrica.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">2. Responsable del Tratamiento</h2>
                            <p>
                                La entidad responsable del tratamiento de sus datos personales es <strong>Grupo Leovoltaje</strong>.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li><strong>Domicilio:</strong> Medellín, Antioquia, Colombia.</li>
                                <li><strong>Correo electrónico:</strong> grupo.leovoltaje@gmail.com</li>
                                <li><strong>Teléfono/WhatsApp:</strong> +57 300 384 7833</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">3. Información que Recopilamos</h2>
                            <p>
                                Podemos recopilar y procesar los siguientes datos personales cuando interactúa con nosotros:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li>
                                    <strong>Datos de Identificación:</strong> Nombre completo, número de identificación (cuando sea necesario para cotizaciones formales o contratos).
                                </li>
                                <li>
                                    <strong>Datos de Contacto:</strong> Dirección de correo electrónico, número de teléfono móvil y dirección física del proyecto o residencia (para visitas técnicas).
                                </li>
                                <li>
                                    <strong>Datos Técnicos:</strong> Información sobre su proyecto eléctrico, planos, requerimientos de carga y fotografías del sitio, necesarios para la prestación del servicio.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">4. Finalidad del Tratamiento</h2>
                            <p>
                                Los datos personales recolectados serán utilizados para las siguientes finalidades:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li>
                                    Presentar cotizaciones y propuestas técnicas y económicas para servicios de ingeniería eléctrica.
                                </li>
                                <li>
                                    Gestionar la ejecución de proyectos, instalaciones, mantenimientos y legalizaciones RETIE.
                                </li>
                                <li>
                                    Comunicarnos con usted a través de correo electrónico, llamadas telefónicas o WhatsApp para coordinar visitas técnicas y responder consultas.
                                </li>
                                <li>
                                    Cumplir con obligaciones legales, contables y tributarias en Colombia.
                                </li>
                                <li>
                                    Enviar información sobre novedades, promociones o actualizaciones de nuestros servicios (siempre que haya dado su consentimiento).
                                </li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">5. Derechos de los Titulares (Habeas Data)</h2>
                            <p>
                                Como titular de los datos personales, usted tiene los siguientes derechos, los cuales puede ejercer en cualquier momento:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li><strong>Conocer:</strong> Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
                                <li><strong>Actualizar:</strong> Rectificar sus datos personales en caso de que sean inexactos o incompletos.</li>
                                <li><strong>Rectificar:</strong> Corregir información errónea.</li>
                                <li><strong>Suprimir:</strong> Solicitar la eliminación de sus datos cuando no sean necesarios para la finalidad para la cual fueron recolectados, o cuando haya revocado su consentimiento, siempre que no exista un deber legal o contractual de conservarlos.</li>
                                <li><strong>Revocar:</strong> Dejar sin efecto la autorización para el tratamiento de sus datos.</li>
                            </ul>
                            <p className="mt-4">
                                Para ejercer estos derechos, puede contactarnos a través del correo electrónico: <a href="mailto:grupo.leovoltaje@gmail.com">grupo.leovoltaje@gmail.com</a>.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">6. Seguridad de la Información</h2>
                            <p>
                                Implementamos medidas de seguridad técnicas, administrativas y humanas razonables para proteger su información personal contra el acceso no autorizado, la pérdida, alteración o uso indebido. Sin embargo, ninguna transmisión de datos por Internet es completamente segura, por lo que no podemos garantizar la seguridad absoluta de la información transmitida a nuestro sitio web.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">7. Cookies y Tecnologías de Rastreo</h2>
                            <p>
                                Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de navegación y analizar el tráfico del sitio. Usted puede configurar su navegador para rechazar todas o algunas cookies, pero esto podría afectar la funcionalidad de ciertos servicios.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl mb-4">8. Cambios en la Política</h2>
                            <p>
                                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente. Le recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos su información.
                            </p>
                        </section>

                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <p className="text-sm text-slate-500">
                                Si tiene preguntas sobre esta Política de Privacidad, por favor contáctenos en <a href="mailto:grupo.leovoltaje@gmail.com" className="text-primary-1 font-medium">grupo.leovoltaje@gmail.com</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
