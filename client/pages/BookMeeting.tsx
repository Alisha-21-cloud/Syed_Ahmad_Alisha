import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";

export default function BookMeeting() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  
  return (
    <Layout>
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="Let's Connect" 
          title="Book a Meeting" 
          description="Schedule a 30-minute session with me to discuss your project, ideas, or opportunities."
          center
        />
        <div className="mt-12 glass-card rounded-[2rem] overflow-hidden border border-border/50 min-h-[700px]">
          <Cal 
            namespace="30min"
            calLink="syed-ahmad-alisha/30min"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
          />
        </div>
      </div>
    </Layout>
  );
}
