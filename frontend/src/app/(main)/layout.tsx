import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Toolbar from "@/components/toolbar";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            height: '100vh'
        }}>
            <Navbar />
            <Toolbar />
            <Box sx={{
                flexGrow: 1
            }}>
                {children}
            </Box>
            <Footer />
        </section>
    );
}