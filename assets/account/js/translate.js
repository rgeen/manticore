const googleTranslateConfig = { lang: "en" };

function TranslateInit()
{
    if (googleTranslateConfig.langFirstVisit && !Cookies.get('googtrans')) {
        TranslateCookieHandler("/auto/" + googleTranslateConfig.langFirstVisit);
    }

    let code = TranslateGetCode();
    let select = document.querySelector('#languages__current_top');
    if (select !== null) {
        select.innerHTML = code.toUpperCase();
    }

    if (code == googleTranslateConfig.lang) { TranslateCookieHandler(null, googleTranslateConfig.domain); }

    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    TranslateEventHandler('click', '[data-google-lang]', function (e) {
        TranslateCookieHandler("/" + googleTranslateConfig.lang + "/" + e.getAttribute("data-google-lang"), googleTranslateConfig.domain);
        window.location.reload();
    });
}

function TranslateGetCode() {
    let lang = (Cookies.get('googtrans') != undefined && Cookies.get('googtrans') != "null") ? Cookies.get('googtrans') : googleTranslateConfig.lang;
    return lang.match(/(?!^\/)[^\/]*$/gm)[0];
}

function TranslateCookieHandler(val, domain) {
    Cookies.set('googtrans', val);
    Cookies.set("googtrans", val, {
        domain: "." + document.domain,
    });

    if (domain == "undefined") return;
    Cookies.set("googtrans", val, {
        domain: domain,
    });

    Cookies.set("googtrans", val, {
        domain: "." + domain,
    });
}

function TranslateEventHandler(event, selector, handler) {
    document.addEventListener(event, function (e) {
        let el = e.target.closest(selector);
        if (el) handler(el);
    });
}

function startTraslate(lang)
{
    TranslateCookieHandler("/" + googleTranslateConfig.lang + "/" + lang, googleTranslateConfig.domain);
    window.location.reload();
}