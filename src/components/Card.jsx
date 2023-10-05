import Text from './Text'
import useGlobalState from './useGlobalState'

export default function Card(props) {
    const { name, email, newsletter } = useGlobalState()

    return (
        <div>
            <h2>Namn</h2>
            <Text text={name.value} />
            <h2>Epost</h2>
            <Text text={email.value} />
            <h2>Vill ha nyhetsbrev</h2>
            {newsletter.value ? <Text text="Ja" /> : <Text text="Nej" />}
        </div>
    )
}
