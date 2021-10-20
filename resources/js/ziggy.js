const Ziggy = {"url":"http:\/\/inertiajs-example.test","port":null,"defaults":{},"routes":{"contactus.index":{"uri":"contact-us","methods":["GET","HEAD"]},"contactus.store":{"uri":"contact-us","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
