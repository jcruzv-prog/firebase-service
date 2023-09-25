'use client'
import { Box } from "@mui/system";
export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <Box sx={{height:'100vh'}}>{children}</Box>
  }