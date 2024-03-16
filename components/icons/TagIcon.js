import React from 'react'

const TagIcon = ({ width = 24, height = 24, color }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16989 15.3L8.69989 19.83C10.5599 21.69 13.5799 21.69 15.4499 19.83L19.8399 15.44C21.6999 13.58 21.6999 10.56 19.8399 8.69005L15.2999 4.17005C14.3499 3.22005 13.0399 2.71005 11.6999 2.78005L6.69989 3.02005C4.69989 3.11005 3.10989 4.70005 3.00989 6.69005L2.76989 11.69C2.70989 13.04 3.21989 14.35 4.16989 15.3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.49988 12.0001C10.8806 12.0001 11.9999 10.8808 11.9999 9.50006C11.9999 8.11935 10.8806 7.00006 9.49988 7.00006C8.11917 7.00006 6.99988 8.11935 6.99988 9.50006C6.99988 10.8808 8.11917 12.0001 9.49988 12.0001Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>

    )
}

export default TagIcon