import { toTitleCase } from 'forging-react/lib/helpers/utility';
import { useTranslation as usei18nTranslation} from 'react-i18next'

export const useTranslation = () => {
    const { t } = usei18nTranslation();
    const numberToText = (translatedText: string) => translatedText.replace(/[0-9]/g, w => t(w));
    const customTranslation = (key: string) => numberToText(
        t(
            toTitleCase(
                key.trim().toLowerCase()  
            )
        )
    );
    
    return {t:customTranslation, nt:numberToText};
}