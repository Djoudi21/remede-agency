import Icon from '@mdi/react';
import {mdiAccountCircle} from '@mdi/js';
import stylesIndex from "../assets/css/index.module.scss";

export default function LoginIconAndText() {
    return (
        <div className={stylesIndex.flexCenter}>
            <Icon path={mdiAccountCircle} size={1} />
            <span className={stylesIndex.ml10}>Sign in</span>
        </div>
    )
}
