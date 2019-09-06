import React from 'react'

interface IProps {
    count: number
}

const HitCount = ({count}: IProps) => {
    return (
        <p>You clicked {count} {count === 1 ? 'time' : 'times'}!</p>
    )
}

export default HitCount
