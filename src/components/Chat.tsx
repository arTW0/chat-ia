'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { useChat } from 'ai/react'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
    <CardHeader>
      <CardTitle>Chat</CardTitle>
      <CardDescription>Chat bot usando Vercel SDK</CardDescription>
    </CardHeader>

    <CardContent className="space-y-4">
      {messages.map(message => {
        return (
          <div
            key={message.id}
            className="flex gap-3 text-slate-600 text-sm"
          >
            {message.role === 'user' && (
              <Avatar>
                <AvatarFallback>AN</AvatarFallback>
                <AvatarImage src="https://github.com/arTW0.png" />
              </Avatar>
            )}

            {message.role === 'assistant' && (
              <Avatar>
                <AvatarFallback>IA</AvatarFallback>
                <AvatarImage src="https://img.freepik.com/psd-gratuitas/icone-de-objeto-3d-kawaii_23-2150565749.jpg?size=626&ext=jpg&ga=GA1.2.1206069873.1686746874&semt=sph" />
              </Avatar>
            )}
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">
                {message.role === 'user' ? 'Você' : 'Assistente'}:
              </span>
              {message.content}
            </p>
          </div>
        )
      })}
    </CardContent>

    <CardFooter>
      <form
        onSubmit={handleSubmit}
        className="space-x-2 w-full flex gap-2"
      >
        <Input
          className="rounded border-double border-4 border-slate-500"
          placeholder="Digite sua mensagem"
          value={input}
          onChange={handleInputChange}
        />
        <Button
          className="bg-slate-600 rounded hover:bg-slate-400"
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </CardFooter>
  </Card>
}