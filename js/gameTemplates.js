const gameTemplates = {
    correctTags: {
        // Основные HTML теги
        'div': '<div>',
        'p': '<p>',
        'span': '<span>',
        'section': '<section>',
        'article': '<article>',
        'header': '<header>',
        'footer': '<footer>',
        'nav': '<nav>',
        'main': '<main>',
        'aside': '<aside>',
        'h1': '<h1>',
        'h2': '<h2>',
        'h3': '<h3>',
        'h4': '<h4>',
        'h5': '<h5>',
        'h6': '<h6>',
        'ul': '<ul>',
        'ol': '<ol>',
        'li': '<li>',
        'form': '<form>',
        'label': '<label>',
        'input': '<input>',
        'button': '<button>',
        'select': '<select>',
        'option': '<option>',
        'textarea': '<textarea>',
        'table': '<table>',
        'thead': '<thead>',
        'tbody': '<tbody>',
        'tr': '<tr>',
        'th': '<th>',
        'td': '<td>',
        'img': '<img>',
        'video': '<video>',
        'audio': '<audio>',
        'figure': '<figure>',
        'figcaption': '<figcaption>',
        'time': '<time>',
        'mark': '<mark>'
    },

    incorrectTags: {
        'div': ['<div/>', '<div', '</div>', 'div>', 'div', '<див>', '<vid>', '< div >', '"div"', '{div}', '[div]', 'div]', '<div]'],
        'p': ['<p/>', '<p', '</p>', 'p>', 'p', '<р>', '<п>', '< p >', '"p"', '{p}', '[p]', 'p]', '<p]'],
        'span': ['<span/>', '<span', '</span>', 'span>', 'span', '<спан>', '<сапн>', '< span >', '"span"', '{span}', '[span]', 'span]', '<span]'],
        'section': ['<section/>', '<section', '</section>', 'section>', 'section', '<секция>', '<секшин>', '< section >', '"section"', '{section}', '[section]', 'section]', '<section]'],
        'article': ['<article/>', '<article', '</article>', 'article>', 'article', '<артикл>', '<атикле>', '< article >', '"article"', '{article}', '[article]', 'article]', '<article]'],
        'header': ['<header/>', '<header', '</header>', 'header>', 'header', '<хедер>', '<хеадер>', '< header >', '"header"', '{header}', '[header]', 'header]', '<header]'],
        'footer': ['<footer/>', '<footer', '</footer>', 'footer>', 'footer', '<футер>', '<фоотер>', '< footer >', '"footer"', '{footer}', '[footer]', 'footer]', '<footer]'],
        'nav': ['<nav/>', '<nav', '</nav>', 'nav>', 'nav', '<нав>', '<навигация>', '< nav >', '"nav"', '{nav}', '[nav]', 'nav]', '<nav]'],
        'main': ['<main/>', '<main', '</main>', 'main>', 'main', '<маин>', '<мэйн>', '< main >', '"main"', '{main}', '[main]', 'main]', '<main]'],
        'aside': ['<aside/>', '<aside', '</aside>', 'aside>', 'aside', '<асайд>', '<асайде>', '< aside >', '"aside"', '{aside}', '[aside]', 'aside]', '<aside]'],
        'h1': ['<h1/>', '<h1', '</h1>', 'h1>', 'h1', '<ч1>', '<н1>', '< h1 >', '"h1"', '{h1}', '[h1]', 'h1]', '<h1]'],
        'h2': ['<h2/>', '<h2', '</h2>', 'h2>', 'h2', '<ч2>', '<н2>', '< h2 >', '"h2"', '{h2}', '[h2]', 'h2]', '<h2]'],
        'h3': ['<h3/>', '<h3', '</h3>', 'h3>', 'h3', '<ч3>', '<н3>', '< h3 >', '"h3"', '{h3}', '[h3]', 'h3]', '<h3]'],
        'h4': ['<h4/>', '<h4', '</h4>', 'h4>', 'h4', '<ч4>', '<н4>', '< h4 >', '"h4"', '{h4}', '[h4]', 'h4]', '<h4]'],
        'h5': ['<h5/>', '<h5', '</h5>', 'h5>', 'h5', '<ч5>', '<н5>', '< h5 >', '"h5"', '{h5}', '[h5]', 'h5]', '<h5]'],
        'h6': ['<h6/>', '<h6', '</h6>', 'h6>', 'h6', '<ч6>', '<н6>', '< h6 >', '"h6"', '{h6}', '[h6]', 'h6]', '<h6]'],
        'ul': ['<ul/>', '<ul', '</ul>', 'ul>', 'ul', '<ул>', '<юл>', '< ul >', '"ul"', '{ul}', '[ul]', 'ul]', '<ul]'],
        'ol': ['<ol/>', '<ol', '</ol>', 'ol>', 'ol', '<ол>', '<оул>', '< ol >', '"ol"', '{ol}', '[ol]', 'ol]', '<ol]'],
        'li': ['<li/>', '<li', '</li>', 'li>', 'li', '<ли>', '<лi>', '< li >', '"li"', '{li}', '[li]', 'li]', '<li]'],
        'form': ['<form/>', '<form', '</form>', 'form>', 'form', '<форм>', '<фоорм>', '< form >', '"form"', '{form}', '[form]', 'form]', '<form]'],
        'label': ['<label/>', '<label', '</label>', 'label>', 'label', '<лабел>', '<лейбл>', '< label >', '"label"', '{label}', '[label]', 'label]', '<label]'],
        'input': ['<input/>', '<input', '</input>', 'input>', 'input', '<инпут>', '<импут>', '< input >', '"input"', '{input}', '[input]', 'input]', '<input]'],
        'button': ['<button/>', '<button', '</button>', 'button>', 'button', '<баттон>', '<буттон>', '< button >', '"button"', '{button}', '[button]', 'button]', '<button]'],
        'select': ['<select/>', '<select', '</select>', 'select>', 'select', '<селект>', '<селкт>', '< select >', '"select"', '{select}', '[select]', 'select]', '<select]'],
        'option': ['<option/>', '<option', '</option>', 'option>', 'option', '<опция>', '<опшин>', '< option >', '"option"', '{option}', '[option]', 'option]', '<option]'],
        'textarea': ['<textarea/>', '<textarea', '</textarea>', 'textarea>', 'textarea', '<текстареа>', '<текстбокс>', '< textarea >', '"textarea"', '{textarea}', '[textarea]', 'textarea]', '<textarea]'],
        'table': ['<table/>', '<table', '</table>', 'table>', 'table', '<таблица>', '<тейбл>', '< table >', '"table"', '{table}', '[table]', 'table]', '<table]'],
        'thead': ['<thead/>', '<thead', '</thead>', 'thead>', 'thead', '<тхед>', '<теад>', '< thead >', '"thead"', '{thead}', '[thead]', 'thead]', '<thead]'],
        'tbody': ['<tbody/>', '<tbody', '</tbody>', 'tbody>', 'tbody', '<тбоди>', '<тебоди>', '< tbody >', '"tbody"', '{tbody}', '[tbody]', 'tbody]', '<tbody]'],
        'tr': ['<tr/>', '<tr', '</tr>', 'tr>', 'tr', '<тр>', '<тээр>', '< tr >', '"tr"', '{tr}', '[tr]', 'tr]', '<tr]'],
        'th': ['<th/>', '<th', '</th>', 'th>', 'th', '<тх>', '<тэаш>', '< th >', '"th"', '{th}', '[th]', 'th]', '<th]'],
        'td': ['<td/>', '<td', '</td>', 'td>', 'td', '<тд>', '<тэди>', '< td >', '"td"', '{td}', '[td]', 'td]', '<td]'],
        'img': ['<img/>', '<img', '</img>', 'img>', 'img', '<имг>', '<имаге>', '< img >', '"img"', '{img}', '[img]', 'img]', '<img]'],
        'video': ['<video/>', '<video', '</video>', 'video>', 'video', '<видео>', '<видио>', '< video >', '"video"', '{video}', '[video]', 'video]', '<video]'],
        'audio': ['<audio/>', '<audio', '</audio>', 'audio>', 'audio', '<аудио>', '<одио>', '< audio >', '"audio"', '{audio}', '[audio]', 'audio]', '<audio]'],
        'figure': ['<figure/>', '<figure', '</figure>', 'figure>', 'figure', '<фигура>', '<фигур>', '< figure >', '"figure"', '{figure}', '[figure]', 'figure]', '<figure]'],
        'figcaption': ['<figcaption/>', '<figcaption', '</figcaption>', 'figcaption>', 'figcaption', '<фигкапшн>', '<фигкэпшн>', '< figcaption >', '"figcaption"', '{figcaption}', '[figcaption]', 'figcaption]', '<figcaption]'],
        'time': ['<time/>', '<time', '</time>', 'time>', 'time', '<тайм>', '<тиме>', '< time >', '"time"', '{time}', '[time]', 'time]', '<time]'],
        'mark': ['<mark/>', '<mark', '</mark>', 'mark>', 'mark', '<марк>', '<маарк>', '< mark >', '"mark"', '{mark}', '[mark]', 'mark]', '<mark]']
    },

    loremTexts: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt",
        "Ut labore et dolore magna aliqua",
        "Ut enim ad minim veniam",
        "Duis aute irure dolor in reprehenderit",
        "Excepteur sint occaecat cupidatat non proident",
        "Sunt in culpa qui officia deserunt mollit",
        "Exercitation ullamco laboris nisi ut aliquip",
        "Quis nostrud exercitation ullamco laboris"
    ],

    templates: [
    `(div)
        (section)
            (article)
                (h1)(lorem)(/h1)
                (div)
                    (p)(lorem)(/p)
                    (span)(lorem)(/span)
                (/div)
            (/article)
            (div)
                (h2)(lorem)(/h2)
                (p)(lorem)(/p)
            (/div)
        (/section)
    (/div)`,

    `(article)
        (div)
            (section)
                (h2)(lorem)(/h2)
                (div)
                    (p)(lorem)(/p)
                    (div)
                        (span)(lorem)(/span)
                    (/div)
                (/div)
            (/section)
            (p)(lorem)(/p)
        (/div)
    (/article)`,

    `(section)
        (div)
            (h1)(lorem)(/h1)
            (article)
                (div)
                    (p)(lorem)(/p)
                    (span)(lorem)(/span)
                (/div)
            (/article)
            (section)
                (h2)(lorem)(/h2)
            (/section)
        (/div)
    (/section)`,

    `(div)
        (div)
            (div)
                (h1)(lorem)(/h1)
                (span)(lorem)(/span)
            (/div)
            (section)
                (p)(lorem)(/p)
                (div)(lorem)(/div)
            (/section)
        (/div)
        (article)(lorem)(/article)
    (/div)`,

    `(article)
        (h2)(lorem)(/h2)
        (div)
            (section)
                (div)
                    (p)(lorem)(/p)
                    (div)
                        (span)(lorem)(/span)
                    (/div)
                (/div)
                (h1)(lorem)(/h1)
            (/section)
        (/div)
    (/article)`,

    `(div)
        (section)
            (article)
                (div)
                    (h1)(lorem)(/h1)
                    (p)(lorem)(/p)
                (/div)
                (section)
                    (span)(lorem)(/span)
                (/section)
            (/article)
            (div)(lorem)(/div)
        (/section)
    (/div)`,

    `(section)
        (article)
            (div)
                (h2)(lorem)(/h2)
                (div)
                    (p)(lorem)(/p)
                (/div)
            (/div)
            (section)
                (span)(lorem)(/span)
            (/section)
        (/article)
        (div)(lorem)(/div)
    (/section)`,

    `(div)
        (article)
            (h1)(lorem)(/h1)
            (div)
                (section)
                    (p)(lorem)(/p)
                    (div)
                        (span)(lorem)(/span)
                    (/div)
                (/section)
            (/div)
        (/article)
        (section)(lorem)(/section)
    (/div)`,

    `(article)
        (section)
            (div)
                (h2)(lorem)(/h2)
                (article)
                    (p)(lorem)(/p)
                (/article)
            (/div)
            (div)
                (span)(lorem)(/span)
            (/div)
        (/section)
    (/article)`,

    `(div)
        (div)
            (section)
                (h1)(lorem)(/h1)
                (div)
                    (article)
                        (p)(lorem)(/p)
                    (/article)
                (/div)
            (/section)
            (span)(lorem)(/span)
        (/div)
    (/div)`,

    `(section)
        (div)
            (article)
                (div)
                    (h2)(lorem)(/h2)
                    (section)
                        (p)(lorem)(/p)
                    (/section)
                (/div)
            (/article)
            (div)(lorem)(/div)
        (/div)
    (/section)`,

    `(article)
        (div)
            (h1)(lorem)(/h1)
            (section)
                (div)
                    (p)(lorem)(/p)
                    (article)
                        (span)(lorem)(/span)
                    (/article)
                (/div)
            (/section)
        (/div)
    (/article)`,

    `(div)
        (section)
            (div)
                (article)
                    (h2)(lorem)(/h2)
                    (div)
                        (p)(lorem)(/p)
                    (/div)
                (/article)
                (span)(lorem)(/span)
            (/div)
        (/section)
    (/div)`,

    `(section)
        (article)
            (div)
                (h1)(lorem)(/h1)
                (section)
                    (div)
                        (p)(lorem)(/p)
                    (/div)
                (/section)
            (/div)
            (div)(lorem)(/div)
        (/article)
    (/section)`,

    `(div)
        (div)
            (h2)(lorem)(/h2)
            (article)
                (section)
                    (p)(lorem)(/p)
                    (div)
                        (span)(lorem)(/span)
                    (/div)
                (/section)
            (/article)
        (/div)
    (/div)`,

    `(article)
        (section)
            (div)
                (h1)(lorem)(/h1)
                (div)
                    (article)
                        (p)(lorem)(/p)
                    (/article)
                (/div)
            (/div)
            (span)(lorem)(/span)
        (/section)
    (/article)`,

    `(div)
        (section)
            (article)
                (div)
                    (h2)(lorem)(/h2)
                    (section)
                        (p)(lorem)(/p)
                    (/section)
                (/div)
            (/article)
        (/section)
    (/div)`,

    `(section)
        (div)
            (h1)(lorem)(/h1)
            (article)
                (div)
                    (p)(lorem)(/p)
                    (div)
                        (span)(lorem)(/span)
                    (/div)
                (/div)
            (/article)
        (/div)
    (/section)`,

    `(article)
        (div)
            (section)
                (h2)(lorem)(/h2)
                (div)
                    (article)
                        (p)(lorem)(/p)
                    (/article)
                (/div)
            (/section)
            (div)(lorem)(/div)
        (/div)
    (/article)`,

    `(div)
        (article)
            (section)
                (div)
                    (h1)(lorem)(/h1)
                    (p)(lorem)(/p)
                (/div)
                (div)
                    (span)(lorem)(/span)
                (/div)
            (/section)
        (/article)
    (/div)`,

    `(section)
        (div)
            (article)
                (h2)(lorem)(/h2)
                (section)
                    (div)
                        (p)(lorem)(/p)
                    (/div)
                (/section)
            (/article)
        (/div)
    (/section)`,

    `(div)
        (div)
            (section)
                (h1)(lorem)(/h1)
                (article)
                    (div)
                        (p)(lorem)(/p)
                        (span)(lorem)(/span)
                    (/div)
                (/article)
            (/section)
        (/div)
    (/div)`,

    `(article)
        (section)
            (div)
                (h2)(lorem)(/h2)
                (div)
                    (article)
                        (p)(lorem)(/p)
                    (/article)
                (/div)
            (/div)
            (div)(lorem)(/div)
        (/section)
    (/article)`,

    `(div)
        (article)
            (div)
                (section)
                    (h1)(lorem)(/h1)
                    (div)
                        (p)(lorem)(/p)
                    (/div)
                (/section)
            (/div)
            (span)(lorem)(/span)
        (/article)
    (/div)`,

    `(section)
        (article)
            (div)
                (h2)(lorem)(/h2)
                (section)
                    (div)
                        (p)(lorem)(/p)
                        (div)
                            (span)(lorem)(/span)
                        (/div)
                    (/div)
                (/section)
            (/div)
        (/article)
    (/section)`,

    `(div)
        (div)
            (h1)(lorem)(/h1)
            (article)
                (section)
                    (div)
                        (p)(lorem)(/p)
                    (/div)
                (/section)
            (/article)
            (div)(lorem)(/div)
        (/div)
    (/div)`,

    `(article)
        (section)
            (div)
                (h2)(lorem)(/h2)
                (article)
                    (div)
                        (p)(lorem)(/p)
                        (span)(lorem)(/span)
                    (/div)
                (/article)
            (/div)
        (/section)
    (/article)`,

    `(section)
        (div)
            (article)
                (h1)(lorem)(/h1)
                (div)
                    (section)
                        (p)(lorem)(/p)
                    (/section)
                (/div)
            (/article)
        (/div)
    (/section)`,

    `(div)
        (article)
            (div)
                (section)
                    (h2)(lorem)(/h2)
                    (div)
                        (article)
                            (p)(lorem)(/p)
                        (/article)
                    (/div)
                (/section)
            (/div)
        (/article)
    (/div)`,

    `(article)
        (div)
            (h1)(lorem)(/h1)
            (section)
                (div)
                    (article)
                        (p)(lorem)(/p)
                        (div)
                            (span)(lorem)(/span)
                        (/div)
                    (/article)
                (/div)
            (/section)
        (/div)
    (/article)`,

            `(nav)
        (ul)
            (li)
                (a)(lorem)(/a)
                (ul)
                    (li)(a)(lorem)(/a)(/li)
                    (li)
                        (a)(lorem)(/a)
                        (ul)
                            (li)(a)(lorem)(/a)(/li)
                            (li)(a)(lorem)(/a)(/li)
                        (/ul)
                    (/li)
                (/ul)
            (/li)
            (li)(a)(lorem)(/a)(/li)
        (/ul)
    (/nav)`
    ]
};
