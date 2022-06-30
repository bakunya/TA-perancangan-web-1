import { useRouter } from 'next/router'
import Prodi from '@/templates/ProdiTemplate'
import React from 'react'

export default function ProdiPage() {
    const { query: { prodi } } = useRouter()

    return (
        <Prodi />
    )
}