import Icon from '@mdi/react';
import stylesIndex from "../assets/css/index.module.scss";
import { mdiLogoutVariant } from '@mdi/js';

export default function LogoutIconAndText() {
    return (
        <div className={stylesIndex.flexCenter}>
            <Icon path={mdiLogoutVariant} size={1} />
            <span className={stylesIndex.ml10}>Sign out</span>
        </div>
    )
}
