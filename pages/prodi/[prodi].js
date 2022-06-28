import { useRouter } from 'next/router'
import Prodi from '@/templates/Prodi'
import React from 'react'

export default function ProdiPage() {
    const { query: { prodi } } = useRouter()

    return (
        <Prodi />
    )
}