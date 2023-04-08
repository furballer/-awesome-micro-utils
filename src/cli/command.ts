#!/usr/bin/env ts-node

import { Command } from 'commander'
import inquirer from 'inquirer'
import mkdirp from 'mkdirp'

// const program = new Command()

// program.version('0.0.1', '-v, --version', '@calmer/terminal-cli 当前版本')

// program
//   // .description('命令描述') // 命令描述
//   .option('-d, --dir <dirname>', '带参选项描述', '选项默认值') // 带参选项（选项全称 取值时转成驼峰写法），支持设置默认值
//   .option('-c, --copy', '布尔选项描述') // 布尔选项（区别于 选项全称后有没有 <xxx>），指令中-c，选项copy属性值为true
//   .option('-rm, --remove <dirname...>', '带参选项描述') // 数组参数必填，指令中多个参数空格分割，不支持设置默认值
//   .option('-i, --ip [dirname...]', '带参选项描述') // 数组参数，非必填(不填值为true)，指令中多个参数空格分割，不支持设置默认值
//   .action(async (options) => {
//     console.log('action', options) // option.dir   option.copy
//   })

// // 解析用户执行命令传入的参数
// program.parse(process.argv)

const config = await inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'please set your project name: ',
    },
    {
      type: 'confirm',
      name: 'typescript',
      message: 'to use typescript: ',
      default: true, // 默认值
      validate(value: string) {
        console.log(value)
        return value === 'y' || value === 'n'
      },
    },
  ])
  .catch((error) => console.error('出错啦！', error))

const { name } = config
mkdirp(name)
