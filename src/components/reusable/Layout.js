import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const LayoutContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
`

const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<main>{children}</main>
		</LayoutContainer>
	)
}

export default Layout
