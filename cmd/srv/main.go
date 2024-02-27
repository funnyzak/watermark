// Description: A simple file server
package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/spf13/pflag"
)

type ClIParam struct {
	Port      uint
	StaticDir string
}

func parseCommandLineParams() (cliParam ClIParam) {
	pflag.UintVarP(&cliParam.Port, "port", "p", 8080, "server port")
	pflag.StringVarP(&cliParam.StaticDir, "static-dir", "s", "./", "static file directory")
	pflag.Parse()
	return cliParam
}

func run(param ClIParam) {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	r.StaticFS("/", gin.Dir(param.StaticDir, false))
	fmt.Printf("Server is running on port %v, static file directory is %v\n", param.Port, param.StaticDir)
	r.Run(fmt.Sprintf(":%v", param.Port))
}

func main() {
	cliParam := parseCommandLineParams()
	run(cliParam)
}
