import { useParams, Link } from 'react-router-dom'

export default function User({ onRemoveUser }) {
    const { userId } = useParams()

    return (
        <>
            <h2>User: {userId} </h2>

            <button type="button" onClick={() => onRemoveUser(userId)}>
                Remove
            </button>

            <Link to="/users"> Voltar aos Usuários </Link>
        </>
    )
}