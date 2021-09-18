import React from 'react'
import Nav from '../components/Nav'
import styled from 'styled-components'

const LayoutContainer = styled.div`
	width: 100%;

	margin: 0;
	padding: 0;
	overflow-y: scroll;
`

const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<Nav />
			<main>{children}</main>
		</LayoutContainer>
	)
}

export default Layout
