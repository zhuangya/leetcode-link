(ns zhuangya.ltl)

(defn handler [req res]
  (.end res (.stringify js/JSON (clj->js req.query))))
