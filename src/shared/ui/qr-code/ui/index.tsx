import { useUnit } from 'effector-react';
import { QRCode as QRCodeLib} from 'react-qrcode-logo';
import logoImage from 'shared/assets/full-logo.svg';
import { $theme, getThemeColor } from 'shared/lib/theme';

interface QrCodeProps {
    value: string,
    className?: string
}

export const QrCode = ({
    value,
    className
}: QrCodeProps) => {
    const theme = useUnit($theme);
    const colors = {
        fg: getThemeColor('--main-color', theme),
        bg: getThemeColor('--block-fill-color', theme)
    };

    return(
        <div className={className}>
            <QRCodeLib 
                value={value}
                logoImage={logoImage as unknown as string}
                fgColor={colors.fg}
                bgColor={colors.bg}
            />
        </div>
    );
};