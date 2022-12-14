
(function() {


    //variables
    var numberOfParagraphs = 2;
    var MAX_PARAGRAPHS = 100;

    var quoteMin = 3;
    var quoteMax = 5;

    var quotes = [
        "لۆریم ئیپسوم دۆلۆر ڤیستوم دیارنا."
        , "مینبوو کیبین بۆلۆن دیارنین کیباس لۆریم ئیپسوم سیت ئەمیت کۆسیتەیر ئیلایت.  تێمپۆر ئەرکیتۆ ئەلایس ڤیلیت ئۆدیت ماروا پراینس دولۆر سیت ئەمیت، کوارنا جاینات سیرتووم کۆریچ گوارنا ئیل بوتان سیرانتیان رینارتا فیمان شیرانی زیل."
        , "براندۆن گۆتیسویت دنیار پوتین تیراف هەسار نیکوو لاس پراینس، رۆیال کراون بیت."
        , "تیک وەت فیسام لاب پەی تروس؟ کاپرانین هیمان ئیپسوم لۆریم سیت ئەمیت جایرنا شیکار سپیان."
        , "نواج نۆچی ساپ فلیر کۆنتایری وی سیرانت دولۆر سیت ئەمیر"
        , "ڤیانات کولوم حیماین هیست!"
        , "وەبارت زناری ماونت گێت؟ لۆریم ئیپسوم سیت دیر، هێرس یور براف تسایت ستیک"
        , "پەینت ئۆنلاین  نیدت فراید توو ڤاین گلووپ. بروش لاین فان"
        , "ترای توو ویرن خسیران شیرا ؟ واین."
        , "لیرن سیت ئەمین دۆلۆر، ئیپسوم لۆپیم سەم ئایر کوول لایرین"
        , "توینگس سپین ئاورس پینک توو نیکلاس پرون زیانلاین  چرایی فیسترا برون توولیکان لیتر لاکۆنس ستووپ پلاس فیش ویکنس فایر. لۆریم ئیپسوم ، سیت ئەمیت"
        , "دۆلۆر گراپس زین ترالاین چراک، پیس ستیون پراکت مەیبی ئاید ئۆن سیران تریک توو پیکتر؟ سیناریوس ژنسیار گوانین"
        , "یۆرسا بیدام وزیر قلم لە فیراک بۆ سیران وە لووک تری فۆر هەستیار میسان، بۆ من کلاری خامرین"
        , "شیناو بۆرس لۆریم ئیپسورم لیتس ئینتووی ڤیژوال"
        , "ستۆرم کایری فیت کۆنستەر ئەت ڤێرۆ  سیت دیام..."
        , ""
        , "ڤۆلتووما سانکتوس تیکامیا نۆ سیا کیارلیک دۆلۆر لۆریم."
        , "ڤیا شێر میترانس، میتوس فالی ئیلیکتریس ماسا ئیپسوم."
        , "گیان سانت لاورین، پۆدکاست فلایر تووت سێد دیام نۆنۆمی  فێردرید جی ڕووم تیچ؟ لەهێرد کلاسی لۆریم ئیپسوم دۆلۆر."
        , "سیت ئەمیت کۆسنتەیرت چرایت فیل بۆ سیمان. ماوری باندیت کراس بلایک توشیتا مۆرفی، یووس ئەمانین پرونس لۆریم تیکنیک فول بۆ ترانس سیت ئەمیت دۆلۆر کیت ."
        , "لۆرێم ئیپسوم دۆلۆر پارن ئەمێت، کۆنسێکتێتور نوسبە. ئیتیامیاکولیس مۆربی کۆنگی کۆنسێکوات داپیبوس ، دۆنێک کۆنگ ئۆرسی ئا ڤێستیبولۆم لۆبۆرتیس، دۆلۆر نیس دۆنێک ئوت لاکوس ئاوگ ڤیاموس مێتۆس ماگنا، تەمپوس"
        , "لە کۆنسێکتێتۆر ئەت سۆدالێس ئیو ئێرات پرێسێنت سێمپەر ئورنا سێد."
        , "نێکێ فاوسیبوس کۆنڤالیس. کراس ئاید لاسینیا ئێرات نولا ڤیڤێرا ئاکومسان مێتۆس. دانیشتن ئەمیت گلاستۆ."
        , "ساجیتیس و ماگنا ئانیان  نوک ئاوکتۆر ڤیل دوی."
        , "ئەت کۆرسیس تێمپۆ تێلووس یەکێکە لە پلاسیراتەکانی ڤۆڵوتپات  ئوت کوام لۆرێم."
        , "سۆلیسیتۆدین. ئەک لێکتوس لە بیبێندوم ڤێستیبولۆم سێم. بلاستۆ سیامیک مینوو هینان پۆست دینامیک لۆریم ئیپسوم دۆلۆر کیت ئەمیت گلاس میچ سراین تیتان کۆنستار تیل."
        , "پیوپل بیلیڤ لۆریم نۆت یۆری لاین سێکشن فینوبس  گۆینگ توو هامپ فرۆم لۆریم ئیپسوم ریچارد لووک، ئیپسوم تراین دیساکتوور مەنی ڤالیدەیت ڤیاموس."
        , "ئینتیجەر نیموس نیکوی ئیلیمینتووم کۆماندۆ دیستریت کلاینین ساپین لە کایرین پووت فراینس دیت بوومان ڤیرانسیس بۆ چرای گیانین سیالووس موناب."
        , "کیس لۆریم ئیپسوم دۆلۆر گیت فەیس لاب میت پەینت"
        , "ئۆنلاین  نیدت فراید توو ڤاین گلووپ. بروش لاین فان ترای توو ویرن خسیران شیرا ؟"
        , "واین لیرن سیت ئەمین دۆلۆر.فلیکویس ئیسلاند لیۆ تو ئیسوس ئاوکتەر کویس لێکتۆر سویسپیکت ڤیبلوم بلارسا تیرانیک تریپ توون لۆریم ئیپسوم دۆلۆر سیت ئەمیت کەنستەر سۆری پلاردۆ فیکنالیست، تریلان وێن ترای توو کوان فیر دوالان کۆش بیت فرانس کلاین دیت براون بۆ لیت سیران چیانت پۆلیک دیتارنا گیت هیلیام دیتار لۆریم سیت کەسنتەر فیت تیس جان هاو نیموس کیمال لیماس."
        , "فیران ڤیلار ، لێکتوس پڕۆن ورنا بیتاڵ، نونک لووسی لاکوت. سوپسێند لارین دیتاڵ یوسیمۆد کویت  ئەینان لیۆ دویت سیت پریدوم ئیپسوم لێت ئیتوس زراین جیت پوور تیناڵ کوی هەیر بیرمانین. لۆریم ئەمیت پلایرات لاکوو ئینتەردووم دیگناسیم دۆلۆر سیت ئەمیت ئیتیام دیمانا کلارنا پالێنتسکوی."
        , "لایبێرۆ ئیپسوم سێد نوران لۆریم گیان فیت هەستی سیران ؟ بیتارنا لایکان دیست بوانین ئیلیفاند توتار فایگوت ئارکووس گراڤیدا لاینین سیت ئەمیت مالیسوودا ئیپسوم"
        , "کویس لایبێرۆ گیمات لۆریم ئیپسوم دۆلۆر سیت کەنستەر، هایلان بوال چی فیران سیکتان مۆرید ئیپسوم نولام پرسیم دینید ئەلۆت."
        , "سیراک لیس برون دین. فلایک توون دیسان ڤالدیر لێکتون براین ماتیس ڤیتای ڤیلیت ئیمپەردیت ،"
        , "ماگزیم ئیلیندون هاندرین سیتان پوور گراندی نراوتان."
        , "فاریترا لیگولا کورسیس پرودوم لۆریم ئیپسوم دۆلۆر سیت ئەمیت کەنستەر سێد ئیکتام دونیر ڤاریوس یورنا پایرس مین فلات لاین."
        , "دیتان وی نۆ سیت ئاب ئیلارکان هیرانین تۆسام لابیت بیکوس."
        , "فالیس زاپین بیتای وای نۆت  کرێت دۆلۆر پراین دیارنا موون گراڤیدا لابۆرتیس سیمپیر کۆماندۆ هەبیتانت ئیتوم ئیمپەردیت ئۆرنەری سیت ئۆلریم فیسیل لایت لۆریم لابیرۆ دیگنات سۆسپیکت کۆنست ئیم پرایدەر ."
        , "لۆریسوس ئیکوام پولینار ئۆدیۆ مین نیکوی سۆلیتین ئیسمۆد لۆریم ئیپسوم دۆلۆر سیت ئەمیت. "
        , "کۆنستەتەر تیندووت ڕایدی می کوینت فرینگلا نۆن ڤۆلووپات، ساپین فاسیلووس یورنا دیکتوم ریسوس کۆنگوی ئۆرنەری توتۆر دۆنیک. تورپیسکۆنیوس سلیزەر کونیات پریتوم لێکتوس ڤیل یورنا ئولتریس دیگناسیم پالێنتسکوی، هەبیتانت مۆربی تریستکوی سینیکاور ئیت نیتراس"
        , "مالیساودا فەیمس ئاک تورپیک ئیگات. دۆنیک ئیروس نیکوی دیگنال ئەمیت مۆرسی  ڤیتای نۆن"
        , "نام گیل تریکا کۆرابیت پێلانت ڤیانین فاریتا کۆنڤالیس سیم"
        , "دویت ئیت لاوریت ماست پۆسیور ئید پالێنتسکوی"
        , "لۆریم ئیپسوم دۆلۆر سیت ئەمیت کۆسمتەتەر پوروس ڤاستبولوم ئیلیمینتووم ئەمیت ئیلایت ئەدیپسینگ ئیکوایم،"
        , "ئیرات ڤیم دۆنیک تێمپۆر سۆلیکتیدین ماگنی پیور کامت دیسکتدا ئیمال سیرین بووت مینا برانیت. تریکاپوو لۆریم"
        , "دین نامی لینارد ڤمبیس سیگارفون ئیپ تریکا گلارین بوالا تیت"
        , "مینا ئەمیت دۆنیک کامبی تریسا لۆرێم ئیپسوم دۆلۆر سیت ئەمێت، ئیا کود ئاودیری هابێمۆس نام، ئیوم لە پورتو نەمۆر کوالیسک.  نە پورتو بۆنۆرۆم پرۆ،"
        , "کۆم ئۆراتیۆ ئێلبۆرارێت بۆ دەریا کو ڤیڤێندوم ئەفسی ڕەوانتۆر، ئینیم تۆتا ئەن"
        , "ڤیک ئیت ئینانی ئۆراتیۆ ڤیم ئی موندی پۆندەرۆم دوو نام ئەن"
        , "ئێلیجێندی سکریپسێریت دوب گلایتت ئیلکوانتووم ، ئاید دووانە پرۆبۆ ئینسۆ ئینتەر تەیل دی سێت ئین."
        , "ئیکرسی ریمان ناکۆد لە کیم ڕقاوی ئەکمۆدری دیلیکت لیوس وین. ڤیم ئێت"
        , "سای ڤێرتیریم بیکارهی یوسان ئیگنووتا لیگموس ئێکس سێنتیس ئاکتین هەیە تاتشن ئیلافیند تراکتاتۆس ڤیم یوت،  تیت ئیست ڤیدووت ئەپلیمانتوو کران ئیپسوم ئۆپۆرتیت یوت یانی مینیم ئینریس ئێی.  کوی یووسرا پوتانت ئێڤرتی تیبیت ئیوم ئێی ئەمێت"
        , "کۆمۆن کۆنال یت ریدین نۆلاکیس سینتیهام کەمترین ئاست نۆبس موکلیاس لە  پرویک"
        , "لە فیت ئەسێنتیۆر ڤیس لۆریم ئیپسوم دۆلۆر سیت ئەمیت ڤیکس ئیرمۆد ئەتۆموروم ئایۆ ئێکس هاس"
        , "سۆنیت فالی، ئەت ئۆنارتوس دیلیکتا کوات. تۆتا هابیۆ مونیری ئاید مێی میل."
        , "دیکتاس ئەپیریام ئەلیگیندی میس. سۆلوم سکریپتا یوسوو یار ئید ئیکوادیم نۆسترووم میل"
        , "ئێل دۆسۆندی فاندیل ئیکوابیت هاس نان سێد، ئیورپی پریسکووتی سکریبێنت. ئیۆس کان ئیلوم دیکسانتاس"
        , "تیان  سین دات لۆریم دۆلۆر دیتراکسیت. فیوکان مینینتووم ئاد ئێد مێلا. لۆریم یانی کوین پریسینتا، ئێکس ڤیس میافور لایبریتا فۆسۆلیان"
        , "میر کوین ڤیدین تۆنی. ئاد لابۆرموس منسیرپوم نیسیکات سال ئیرار سیمول ڤیرتووتی ئێی یووم،"
        , "دیکا ئەفێرت ڤیدسی سێنیکتدای مێی. یووت ئیتام سالوتانوس مەسیتاکس، کویم ئەدیپسینگ هۆنیستاتس بۆلۆر"
        ,"ئانتیک ڤێل تیمان ئۆپشن ریکوسابۆ لابردیرد. دۆلۆروم نۆترسم دیسیک ئیمس ڤیس یانت تایل مۆلیستای ئیپسوم کاین لۆریم ئەلتێرا ئەمیت نۆت"
        ,"سیت مازین هامبوس ئینتەرپشن پری تراید, یووت ئیمپیۆیت فاوگیت سێد."
        ,"ئێی پرۆمت سیتیرۆس دیسپاندۆس پێر دوان دۆنیت پیریم دۆلۆر."
        ,"لۆریم پاریت کوانستودەر یاکس دلاریت پێرفیتان تۆتیناس یان مێل. فیناد بلاندیت ئیرت نای ئەیمت لاریدین"
    ];

    
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomValueFromArray(array) {
        var index = Math.floor(Math.random() * array.length);
        return array[index];
    }

    
    var buildParagraph = function(min, max) {
        var numberOfQuotes;
        var currentQuote = "";
        var paragraph = [];

        numberOfQuotes = getRandomIntInclusive(min, max);

        for (var i = 0; i < numberOfQuotes; i++) {
            currentQuote = getRandomValueFromArray(quotes);

            if (paragraph.indexOf(currentQuote) === -1) {
                paragraph.push(currentQuote);
            } else {
                // If it's not unique, do the loop again
                i--;
            }
        }

        return paragraph.join(" ");
    };



    // Element references
    var paragraphValue = document.querySelector(".js-paragraph-value");
    var paragraphMinusButton = document.querySelector(".js-paragraph-minus-button");
    var paragraphPlusButton = document.querySelector(".js-paragraph-plus-button");

    var quoteMinValue = document.querySelector(".js-quote-min-value");
    var quoteMinMinusButton = document.querySelector(".js-quote-min-minus-button");
    var quoteMinPlusButton = document.querySelector(".js-quote-min-plus-button");

    var quoteMaxValue = document.querySelector(".js-quote-max-value");
    var quoteMaxMinusButton = document.querySelector(".js-quote-max-minus-button");
    var quoteMaxPlusButton = document.querySelector(".js-quote-max-plus-button");

    


    var generateButton = document.querySelector(".js-generate-button");
    var renderContainer = document.querySelector(".js-render-container");


    // Helper functions
    function updateHTML(target, value) {
        target.innerHTML = value;
    }


    // Render function
    var renderIpsum = function() {
        var output = "";

        for (var i = 0; i < numberOfParagraphs; i++) {
            output += "<p>" + buildParagraph(quoteMin, quoteMax) + "</p>";
        }

        updateHTML(renderContainer, "");

        renderContainer.innerHTML = output;
    };



    ////////////////////////////////////////
    // Event Listeners
    ////////////////////////////////////////

// generate
    generateButton.addEventListener("click", renderIpsum);

    
    // Number of paragraphs
    paragraphMinusButton.addEventListener('click', function(event) {
        if (numberOfParagraphs > 1) {
            numberOfParagraphs--;
            updateHTML(paragraphValue, numberOfParagraphs);
        }
    });

    paragraphPlusButton.addEventListener('click', function(event) {
        if (numberOfParagraphs < MAX_PARAGRAPHS) {
            numberOfParagraphs++;
            updateHTML(paragraphValue, numberOfParagraphs);
        }
    });

    
    // Min quotes per paragraph
    quoteMinMinusButton.addEventListener('click', function(event) {
        if (quoteMin > 1) {
            quoteMin--;
            updateHTML(quoteMinValue, quoteMin);
        }
    });

    quoteMinPlusButton.addEventListener('click', function(event) {
        if (quoteMin < quoteMax) {
            quoteMin++;
            updateHTML(quoteMinValue, quoteMin);
        }
    });

    
    // Max quotes per paragraph
    quoteMaxMinusButton.addEventListener('click', function(event) {
        if (quoteMax > quoteMin) {
            quoteMax--;
            updateHTML(quoteMaxValue, quoteMax);
        }
    });

    quoteMaxPlusButton.addEventListener('click', function(event) {
        if (quoteMax < quotes.length) {
            quoteMax++;
            updateHTML(quoteMaxValue, quoteMax);
        }
    });

})();


