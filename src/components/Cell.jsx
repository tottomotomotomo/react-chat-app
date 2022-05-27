import formatDistanceToNow from "date-fns/formatDistanceToNow"
import ja from "date-fns/locale/ja";

function Cell({text, icon, name, createdAt}) {
    return(
        <li className="p-4 m-4 border rounded shadow min-h-24">
            <p className="text-xs text-left">{name}</p>
            <p className="text-left">{text}</p>
            <p className="text-sm text-right text-gray-400">
                {formatDistanceToNow(createdAt, {locale: ja})}前
            </p>
        </li>
    );
}

export default Cell;