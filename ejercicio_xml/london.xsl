<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		
		<html>
			<head> <link rel="stylesheet" type="text/css" href="style.css"/>	</head>
			
			<body>
				<h2>Canción:</h2>
				<h1>Titulo: <xsl:value-of select="cancion/titulo"/></h1>
				
				<br/>
				<xsl:for-each select="cancion/letra/estrofa">
					<div>
						<h3>Estrofa: <xsl:value-of select="estrofa"/></h3>						
						
						<span><xsl:value-of select="tipo"/></span>
						
						<xsl:for-each select="verso">
							<p><xsl:value-of select="."/></p>
						</xsl:for-each>
					</div>		
				</xsl:for-each>
					<br/>
				
				<h2>Autor: <xsl:value-of select="cancion/titulo"/></h2>
				
			</body>
		</html>
		
		
	</xsl:template>
</xsl:stylesheet>