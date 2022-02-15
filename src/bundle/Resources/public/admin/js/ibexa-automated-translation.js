jQuery(function () {
    let $ = jQuery;
    let $form = $("form[name=add-translation]", "#add-translation-modal");
    let $container = $(".ibexa-automated-translation-services-container:first", $form);
    let $error = $(".ibexa-automated-translation-error", $container);

    $form.click(function () {
        $error.addClass("invisible");
    });

    $container.find(".ibexa-field-edit--ezboolean .ibexa-data-source__label").click(function () {
        let $input = $(this).find("input[type='checkbox']");
        let isChecked = $input.attr('checked') === 'checked';

        if (isChecked) {
            $input.removeAttr('checked');
            $(this).removeClass('is-checked');
        } else {
            $(this).addClass('is-checked');
            $input.attr('checked', 'checked');
        }
        return false;
    });

    $container.find(".ibexa-data-source__label.is-checked").each(() => {
        $form.find('.ibexa-btn--create-translation').prop("disabled", false);
    });

    $container.find(".ibexa-dropdown__source select option:selected").each(() => {
        $form.find('.ibexa-btn--create-translation').prop("disabled", false);
    });

    $("form[name=add-translation]").submit(function () {
        let targetLang = $("select[name=add-translation\\[language\\]]").val();
        let sourceLang = $("select[name=add-translation\\[base_language\\]]").val();
        let mapping = $container.data('languages-mapping');
        let $serviceSelector = $("#add-translation_translatorAlias");
        let serviceAlias = $serviceSelector.val();
        if ($serviceSelector.is("[type=checkbox]") && !$serviceSelector.is(":checked")) {
            serviceAlias = '';
        }

        if (!serviceAlias.length) {
            return true;
        }

        let translationAvailable = (typeof sourceLang === 'undefined' || -1 !== $.inArray(sourceLang, mapping[serviceAlias])) && (-1 !== $.inArray(targetLang, mapping[serviceAlias]));
        if (false === translationAvailable) {
            $error.removeClass("invisible");
            if ($container.find(".ibexa-field-edit--ezboolean .ibexa-data-source__label").hasClass('is-checked')) {
                $container.find(".ibexa-field-edit--ezboolean .ibexa-data-source__label").click();
                return false;
            }
        }
        return true;
    });
});
