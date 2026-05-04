import React from 'react';

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <section className="bg-slate-900 py-24 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Get in <span className="text-blue-500">Touch</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Have questions about a listing or interested in a partnership?
                        Our team is available across multiple channels to assist you.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 -mt-16 pb-20">
                <div className="grid md:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden border border-slate-200">

                    <div className="bg-white p-10 md:p-16">
                        <h3 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-8">Corporate Office</h3>
                        <div className="space-y-10">
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">Trichy HQ</h4>
                                <p className="text-slate-500">
                                    16/2, Ellaiyamman Kovil Street,<br />
                                    Thottiyam, Trichy-621215.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-600 p-25  flex flex-col  text-white">
                        <div >
                            <p className="text-blue-100 text-xl mb-2">Mob: +91 93608 59919</p>
                            <p className="text-xl">E-mail: consult@mathurarealtors.com</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-400 text-sm font-medium">
                        Mathura Realtors © 2026. All rights reserved.
                    </p>
                </div>
            </section>
        </div>
    );
};
export default Contact;