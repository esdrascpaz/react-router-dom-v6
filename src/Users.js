import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function Users({ users }) {
    const [searchParams, setSearchParams] = useSearchParams()

    // Pegando parâmetro à partir da URL no GET
    const searchTerm = searchParams.get('name') || ''

    const handleSearch = (event) => {
        const name = event.target.value

        // Setando o parâmetro da URL
        if (name) {
            setSearchParams({ name: event.target.value })
        } else {
            setSearchParams({})
        }
    }

    return (
        <>
            <h2>Users</h2>

            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
            />

            <ul>
                {users
                    .filter((user) =>
                        user.fullName
                            .toLowerCase()
                            .includes(searchTerm.toLocaleLowerCase())
                    )
                    .map((user) => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`} >
                                {user.fullName}
                            </Link>
                        </li>
                    ))}
            </ul>

            <Outlet /> {/*Recebendo os dados*/}
        </>
    )
}