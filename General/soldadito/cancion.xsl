<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				
			</head>
			
			<body>
				<h2>Canción:</h2>
				<h1><xsl:value-of select="cancion/titulo"/></h1>
				<p>Autor:(<xsl:value-of select="cancion/autor"/>)</p>
				<br/>
				
				<xsl:for-each select="/cancion/letra/estrofa">
					<xsl:sort select="orden"/>
					<xsl:for-each select="verso">
						<p><xsl:value-of select="."/></p>
					</xsl:for-each>
					<br/>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
